node {

  stage('checkout project'){
    git url: 'https://github.com/smlsunxie/cargocms.git', branch: 'dojo2'
  }


  stage('check docker env'){
    sh "docker -v"
    sh "docker-compose -v"
    sh "docker ps"
  }



  stage('build docker env'){
    sh "docker build -t agileworks/sails_sample_env dockers/node"
  }

  stage('build project'){
    sh "docker-compose run --rm build"
  }

  stage('test project'){
    sh "docker-compose run --rm --service-ports --name debug test"
  }


  stage('run project'){
    sh "docker-compose run -d --rm --service-ports --name dev dev"
  }

  stage('check staging'){
    try{
      def url = 'http://localhost:5001/'
      input message: "Does staging at $url look good? ", ok: "ok! build production image."
    }finally{
      sh "docker rm -f dev"
    }
  }

  stage('build production image'){
    sh "docker build -t agileworks/sails_sample_prod ."
    try{
      sh "docker rm -f sails_sample_prod"
    } catch(e) {}
    sh "docker run -d --name sails_sample_prod -p 8800:5011 agileworks/sails_sample_prod"
  }

}
