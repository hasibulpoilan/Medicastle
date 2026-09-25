import fitz
import os

pdf_path = r"C:\Users\haslb\Downloads\Digital Broshure_compressed.pdf"
output_dir = r"C:\Users\haslb\OneDrive\Desktop\Medicastle\public\catalog"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    
    if page_index < 2:
        continue
        
    if image_list:
        print(f"Found {len(image_list)} images on page {page_index+1}")
    else:
        print(f"No images found on page {page_index+1}")

    for img_index, img in enumerate(image_list, start=1):
        xref = img[0]
        try:
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha > 3: # CMYK
                pix = fitz.Pixmap(fitz.csRGB, pix)
                
            image_filename = f"page{page_index+1}_{img_index}.png"
            image_filepath = os.path.join(output_dir, image_filename)
            
            # Filter very small images by dimensions to avoid tiny artifacts
            if pix.width < 50 or pix.height < 50:
                pix = None
                continue
                
            pix.save(image_filepath)
            pix = None
        except Exception as e:
            print(f"Error extracting image {img_index} on page {page_index+1}: {e}")
        
print("Extraction complete.")
