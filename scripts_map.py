"""One-off: recolour the district's own D2 map asset (public/images/D2-map-gold.png
in the D2-web repo) from gold to this club's teal brand, and copy it into
public/images/district/map.png. Not part of the app — safe to delete after running.
"""
import sys
import colorsys
from pathlib import Path
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")

SRC = Path(r"C:\Users\Dulanjana\Downloads\D2\D2-web\public\images\D2-map-gold.png")
DST = Path(r"C:\Users\Dulanjana\Downloads\D2Clubs\LC_Kalubowila\public\images\district\map.png")

TARGET_RGB = (5, 122, 122)  # club accent teal
SAT_THRESHOLD = 0.15


def recolor(im: Image.Image) -> Image.Image:
    """Flat-replace the gold fill with the solid brand teal, keeping each
    pixel's original alpha untouched — that alpha is what already carries the
    anti-aliased edge of the region, so the swap stays crisp without needing
    to reconstruct a brightness gradient by hand."""
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            _, ss, _ = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            if ss > SAT_THRESHOLD:
                px[x, y] = (*TARGET_RGB, a)
    return im


DST.parent.mkdir(parents=True, exist_ok=True)
img = Image.open(SRC)
out = recolor(img)
out.save(DST, optimize=True)
print(f"Saved {DST} ({out.size[0]}x{out.size[1]})")
