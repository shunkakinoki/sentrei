postinstall-root:
	( cd apps/dashboard && make postinstall-app )
	( cd apps/demo && make postinstall-app )
	( cd apps/landing && make postinstall-app )

postinstall-app:
	rm -rf components
	@if [ "$VERCEL" == "1" ]; then\
		make postinstall-cp;\
	else\
		make postinstall-ln;\
	fi

postinstall-cp:
	cp -r ../../packages/components/src components

postinstall-ln:
	ln -s ../../packages/components/src components
