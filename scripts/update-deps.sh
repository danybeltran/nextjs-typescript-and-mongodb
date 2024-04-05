echo "Getting dependencies"
echo
node ./scripts/get-deps.js
chmod +x ./scripts/installdeps.sh
echo
./scripts/installdeps.sh
echo
rm ./scripts/installdeps.sh
