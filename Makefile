build:
	ng build --prod --deploy-url dist/
	cp dist/index.html .
