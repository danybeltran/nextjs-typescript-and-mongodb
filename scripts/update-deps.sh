echo "Getting dependencies"
echo
node ./scripts/get-deps.js
echo
./scripts/installdeps.sh
echo
rm ./scripts/installdeps.sh
