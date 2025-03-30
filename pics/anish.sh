for img in *.png; do
    ffmpeg -i "$img" -q:v 10 "../comp/$img"
done
