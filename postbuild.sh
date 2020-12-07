#!/bin/bash

# The purpose of this script is to do things with files generated by
# 'create-react-app' after 'build' is run.
# 1. Move files to a new directory called 'user'
#    The resulting structure is 'build/user/static/<etc>'
# 2. Update reference on generated files from
#    static/<etc>
#     to
#    user/static/<etc>
#
# More details on: https://github.com/facebook/create-react-app/issues/3824

# Browse into './build/' directory
cd build
# Create './user/' directory
echo '1/4 Create "web-pruforce" directory'
mv static web-pruforce
mv manifest.json web-pruforce/
mv assets web-pruforce/
# Find all files, excluding (through 'grep'):
# - '.',
# - the newly created directory './user/'
# - all content for the directory'./static/'
# Move all matches to the directory './user/'
# echo '2/4 Move relevant files'
# find . | grep -Ev '^.$|^.\/user$|^.\/static\/.+' | xargs -I{} mv -v {} user
# # Browse into './user/' directory
# cd user
# Find all files within the folder (not subfolders)
# Replace string 'static/' with 'user/static/' on all files that match the 'find'
# ('sed' requires one to create backup files on OSX, so we do that)
echo '2/4 Replace file references'
#find . -type f -maxdepth 3 | LC_ALL=C xargs -I{} sed -i.backup -e 's,"b7ab693999aa96fb6fdb.worker.js,"web-pruforce/b7ab693999aa96fb6fdb.worker.js/,g' {}
find . -type f -maxdepth 3 | LC_ALL=C xargs -I{} sed -i.backup -e 's,static/,web-pruforce/,g' {}
find . -type f -maxdepth 3 | LC_ALL=C xargs -I{} sed -i.backup -e 's,service-worker.js/,web-pruforce/service-worker.js,g' {}
find . -type f -maxdepth 3 | LC_ALL=C xargs -I{} sed -i.backup -e 's,/assets/,/web-pruforce/assets/,g' {}
mv asset-manifest.json web-pruforce/
#mv precache-manifest* web-pruforce/
#mv *.worker.js* web-pruforce/

echo '3/4 also change index html to "web" reference'
sed -i.backup -e 's,/manifest.json,/web-pruforce/manifest.json,g' index.html
sed -i.backup -e 's,/favicon.ico,/web-pruforce/favicon.ico,g' index.html
sed -i.backup -e 's,/logo_pru.png,/web-pruforce/logo_pru.png,g' index.html
sed -i.backup -e 's,/assets/icon/favicon.png,/web-pruforce/assets/icon/favicon.png,g' index.html
sed -i.backup -e 's,/assets/icon/icon.png,/web-pruforce/assets/icon/logo_pru.png,g' index.html

# Delete '*.backup' files created in the last process
echo '4/4 Clean up'
find . -name '*.backup' -type f -delete
# Don