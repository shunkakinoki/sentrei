postinstall-root:
	( cd apps/dashboard && make postinstall-app )
	( cd apps/demo && make postinstall-app )
	( cd apps/landing && make postinstall-app )

postinstall-app:
	rm -rf components
	make postinstall-vercel

postinstall-vercel:
	if [ $(VERCEL) == 1 ]; then make postinstall-cp ; else make postinstall-ln; fi

postinstall-cp:
	cp -r ../../packages/components/src components
	cp -f ../../configurations/postcss/src/index.js postcss.config.js
	cp -f ../../configurations/tailwind/src/index.js tailwind.config.js

postinstall-ln:
	ln -s ../../packages/components/src components
