#!/bin/bash

# Directory for mecha images
mkdir -p public/images/mechas

# Download images for each mecha
curl -o public/images/mechas/falcon.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/4/42/Mecha-list-falcon-image-1bccab46.png.png
curl -o public/images/mechas/panther.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/3/3a/Mecha-list-panther-image-1f09cb95.png.png
curl -o public/images/mechas/alysnes.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/4/4e/Mecha-list-alysnes-image-c52d46c2.png_%281%29.png
curl -o public/images/mechas/tricera.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/5/57/Mecha-list-tricera-image-0d57722c.png.png
curl -o public/images/mechas/narukami.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/a/a1/Mecha-list-narukami-image-34f8bd56.png.png
curl -o public/images/mechas/luminae.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/f/f6/Mecha-list-luminae-image-e4671f1f.png.png
curl -o public/images/mechas/welkin.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/9/9b/Mecha-list-welkin-image-f6a15929.png.png
curl -o public/images/mechas/hurricane.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/a/ae/Mecha-list-hurricane-image-6b30f6b7.png.png
curl -o public/images/mechas/skyraider.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/9/93/Mecha-list-skyraider-image-29a73dd5.png.png
curl -o public/images/mechas/hellfire.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/3/37/Mecha-list-inferno-image-3b5d00ff.png.png
curl -o public/images/mechas/stegosaur.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/5/50/Mecha-list-stego-image-9add82dc.png.png
curl -o public/images/mechas/aquina.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/e/e6/Mecha-list-aquila-image-dd73544f.png.png
curl -o public/images/mechas/pinaka.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/e/e8/Mecha-list-pinaka-image-dfe45354.png.png

# Featured and thumbnail images
curl -o public/images/mechas/falcon-featured.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/4/42/Mecha-list-falcon-image-1bccab46.png.png
curl -o public/images/mechas/falcon-thumb.jpg https://oyster.ignimgs.com/mediawiki/apis.ign.com/mecha-break/4/42/Mecha-list-falcon-image-1bccab46.png.png

echo "All mecha images downloaded successfully!" 