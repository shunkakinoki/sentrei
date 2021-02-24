postinstall-root:
	( cd apps/dashboard && make postinstall )
	( cd apps/demo && make postinstall )
	( cd apps/landing && make postinstall )

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
