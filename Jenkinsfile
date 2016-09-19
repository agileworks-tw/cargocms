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
    sh "docker-compose run --rm test"
  }


  stage('run project'){
    sh "docker-compose run -d --rm dev"
  }

  stage('check staging'){
    try{
      def url = 'http://localhost:5001/'
      input message: "Does staging at $url look good? ", ok: "done!"
    }finally{
      sh "docker-compose stop dev"
    }
  }
}
