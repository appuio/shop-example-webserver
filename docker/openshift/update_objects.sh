#!/bin/sh

if [$CI_BUILD_REF == $(git log --format="%H" -n 1 ./deployment.yaml)]; then
	echo "SAME SAME"
else
	echo "DIFFERENT!"
fi
