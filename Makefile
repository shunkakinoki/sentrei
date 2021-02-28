postinstall-root:
	( cd apps/dashboard && make postinstall-app )
	( cd apps/demo && make postinstall-app )
	( cd apps/landing && make postinstall-app )

postinstall-app:
	if [ $(VERCEL) == 1 ]; then make postinstall-cp ; fi

postinstall-cp:
	for link in $$(find . -maxdepth 1 -type l); do \
	cp --remove-destination $$(readlink -e $$f) $$f; \
	done
