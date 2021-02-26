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
	cp -r ../../locales locales

postinstall-ln:
	ln -sfn ../../packages/components/src components
	ln -sfn ../../locales locales
