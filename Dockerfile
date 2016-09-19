FROM agileworks/sails_sample_env
COPY ./ /sailsSample
WORKDIR /sailsSample

EXPOSE 5011
CMD /bin/sh -l -c 'npm start --production'
