yarn run build

rm -rf server/src/main/resources/static

cp -R build server/src/main/resources/static

cd server && ./mvnw clean package

echo "jar is ready to run"