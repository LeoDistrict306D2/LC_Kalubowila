"""One-off: process the second batch of real officer photos (from
Downloads/be/kalubowila/Club officers_photos-.../) into public/images/board/.
Not part of the app — safe to delete after running."""
import sys
from pathlib import Path
from PIL import Image, ImageOps

sys.stdout.reconfigure(encoding="utf-8")

SRC = Path(r"C:\Users\Dulanjana\Downloads\be\kalubowila\Club officers_photos-20260917T065923Z-1-001\Club officers_photos")
DST = Path(r"C:\Users\Dulanjana\Downloads\D2Clubs\LC_Kalubowila\public\images\board")


def process(src_name: str, dst_name: str, max_edge: int = 1100, quality: int = 87) -> tuple[int, int]:
    img = Image.open(SRC / src_name)
    img = ImageOps.exif_transpose(img)
    img = img.convert("RGB")
    w, h = img.size
    scale = max_edge / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    out_path = DST / dst_name
    img.save(out_path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{dst_name}: {img.size[0]}x{img.size[1]}")
    return img.size


DST.mkdir(parents=True, exist_ok=True)

process("Leo Lion Savindi Dias_Club President.jpeg", "savindi-dias.jpg")
process("Leo Bihanga Nethsith_2nd Vice President.jpg", "bihanga-nethsith.jpg")
process("Leo Sanoli Senevirathna_3rdVice President.jpeg", "sanoli-senevirathne.jpg")
process("Leo Thinesa Welagedara_Secretary.jpg", "thinesa-welagedra.jpg")
process("Leo Inuri Hasanga.jpg", "inuri-hasanga.jpg")
process("Leo Nethan Jayawickrama_Treasurer.jpg", "nethnan-jayawickrama.jpg")
process("Leo Nethmi Kulatilleke_Assistant Treasurer.jpeg", "nethmi-kulatilleke.jpg")
process("Leo Salisa De Silva- Project director.webp", "salisa-de-silva.jpg")
process("Leo Prabodha Udani_Project Director.jpg", "prabodha-udani.jpg")

# Second Sadaham Wandana photo (extra gallery image not previously used)
SADAHAM_SRC = Path(r"C:\Users\Dulanjana\Downloads\be\kalubowila\Club Projects-20260917T065905Z-1-001\Club Projects\සදහම් වන්දනා’26")
PROJ_DST = Path(r"C:\Users\Dulanjana\Downloads\D2Clubs\LC_Kalubowila\public\images\projects\sadaham-wandana")


def process_project(src_path: Path, dst_name: str, max_edge: int = 1600, quality: int = 80) -> tuple[int, int]:
    img = Image.open(src_path)
    img = ImageOps.exif_transpose(img)
    img = img.convert("RGB")
    w, h = img.size
    scale = max_edge / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    out_path = PROJ_DST / dst_name
    img.save(out_path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{dst_name}: {img.size[0]}x{img.size[1]}")
    return img.size


matches = [p for p in SADAHAM_SRC.glob("*.jpg") if not p.name.startswith("84a2a64b")]
assert len(matches) == 1, matches
process_project(matches[0], "g2.jpg")
