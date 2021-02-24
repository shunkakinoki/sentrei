VERCEL = $()

postinstall-root:
	( cd apps/dashboard && make postinstall-app )
	( cd apps/demo && make postinstall-app )
	( cd apps/landing && make postinstall-app )

postinstall-app:
	rm -rf components
	make postinstall-vercel

postinstall-vercel:
ifndef VERCEL
	make postinstall-cp
else
	make postinstall-ln
endif

postinstall-cp:
	cp -r ../../packages/components/src components

postinstall-ln:
	ln -s ../../packages/components/src components
