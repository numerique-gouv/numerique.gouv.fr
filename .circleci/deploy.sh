if [ "${CIRCLE_BRANCH}" == "master" ]; then
  echo "Not yet develop"
elif [ "${CIRCLE_BRANCH}" == "development" ] || [ "${CIRCLE_BRANCH}" == "siteleaf" ]; then
  rsync -avc /tmp/workspace/_site/ $LOGIN@$HOST:/var/www/html/
else
  echo "Not development branch, dry run only"
fi
