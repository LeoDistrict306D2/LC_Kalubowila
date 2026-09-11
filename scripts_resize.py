"""
One-off image processing script for the Kalubowila content refresh.
Reads the real photos supplied by the club, resizes/re-encodes them for the
web, and writes them into public/images/. Not part of the app — safe to
delete after running.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path(r"C:\Users\Dulanjana\Downloads\kalubowila\drive-download-20260911T171007Z-1-001")
DST = Path(r"C:\Users\Dulanjana\Downloads\D2Clubs\LC_Kalubowila\public\images")

results = []

def process(src_rel, dst_rel, max_edge, quality, fmt="JPEG"):
    src = SRC / src_rel
    dst = DST / dst_rel
    dst.parent.mkdir(parents=True, exist_ok=True)

    img = Image.open(src)
    img = ImageOps.exif_transpose(img)  # respect camera orientation
    if img.mode in ("RGBA", "P") and fmt == "JPEG":
        img = img.convert("RGB")
    elif img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")

    w, h = img.size
    scale = min(1.0, max_edge / max(w, h))
    if scale < 1.0:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

    save_kwargs = {"quality": quality, "optimize": True}
    if fmt == "JPEG":
        save_kwargs["progressive"] = True
    img.save(dst, fmt, **save_kwargs)

    size_kb = dst.stat().st_size / 1024
    results.append((dst_rel, img.size, f"{size_kb:.0f} KB"))

# --- Logo -------------------------------------------------------------
process("Club Emblem_LC of Kalubowila.jpeg", "logo/logo.jpg", max_edge=800, quality=90)

# --- Hero / banner ------------------------------------------------------
process("■_Banner _ homepage photos.png", "hero/hero.jpg", max_edge=2400, quality=85)

# --- Officer photos -----------------------------------------------------
process("Club officers_photos/Danushi Gunasinghe.png", "board/danushi-gunasinghe.jpg", max_edge=1100, quality=87)
process("Club officers_photos/Janani Yashodhi.png", "board/janani-yashodhi.jpg", max_edge=1100, quality=87)
process("Club officers_photos/Suhelee Kavithma Senadheera_.png", "board/suhelee-senadheera.jpg", max_edge=1100, quality=87)

# --- Thuru ----------------------------------------------------------------
process("Club Projects/Thuru/IMG_9784.JPG", "projects/thuru/hero.jpg", max_edge=2200, quality=82)
process("Club Projects/Thuru/IMG_9791.JPG", "projects/thuru/g1.jpg", max_edge=1600, quality=80)
process("Club Projects/Thuru/IMG_9794.JPG", "projects/thuru/g2.jpg", max_edge=1600, quality=80)
process("Club Projects/Thuru/IMG_9796.JPG", "projects/thuru/g3.jpg", max_edge=1600, quality=80)

# --- Orcenza'26 -------------------------------------------------------
process("Club Projects/Orcenza_26/IMG_3717.JPG", "projects/orcenza-26/hero.jpg", max_edge=2200, quality=82)
process("Club Projects/Orcenza_26/IMG_3548.JPG", "projects/orcenza-26/g1.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3564.JPG", "projects/orcenza-26/g2.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3578.JPG", "projects/orcenza-26/g3.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3720.JPG", "projects/orcenza-26/g4.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3728.JPG", "projects/orcenza-26/g5.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3791.JPG", "projects/orcenza-26/g6.jpg", max_edge=1600, quality=80)
process("Club Projects/Orcenza_26/IMG_3733.JPG", "projects/orcenza-26/g7.jpg", max_edge=1600, quality=80)

# --- Sadaham Wandana'26 (Sinhala folder name \u2014 resolved by glob to avoid
#     hand-typing the Unicode escapes) ---------------------------------
sadaham_matches = list((SRC / "Club Projects").glob("*26"))
sadaham_matches = [p for p in sadaham_matches if p.name.isascii() is False]
assert len(sadaham_matches) == 1, f"expected exactly one Sadaham Wandana folder, found {sadaham_matches}"
sadaham_dir = f"Club Projects/{sadaham_matches[0].name}"
process(f"{sadaham_dir}/84a2a64b-9288-413b-8206-26a3e18522d8.jpg", "projects/sadaham-wandana/hero.jpg", max_edge=2200, quality=82)
process(f"{sadaham_dir}/e14bb12d-9c48-4183-a549-e867b40ade9b.jpg", "projects/sadaham-wandana/g1.jpg", max_edge=1600, quality=80)

sys.stdout.reconfigure(encoding="utf-8")
for rel, size, kb in results:
    print(f"{rel:45s} {size[0]:>5}x{size[1]:<5} {kb}")
print(f"\n{len(results)} images written")
