#!/bin/bash
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
echo beginning program refresh...
git pull
pm2 delete PhysicanUI-react
npm run build
pm2 start app.config.json
echo refresh complete!
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
