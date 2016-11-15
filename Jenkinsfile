node {

  stage('check environment'){
    sh "docker -v"
    sh "docker-compose -v"
    sh "docker ps"
  }

  stage('checkout'){
    git url: 'https://github.com/agileworks-tw/docker-e2e-sample.git', branch: 'master'
  }

  stage('build'){
    sh "docker build -t agileworks/sails_sample_env dockers/node"
    sh "docker-compose run --rm build"
  }

  stage('test'){
    sh "docker-compose run --rm --service-ports --name debug test"

    sh "docker-compose run -d --rm --service-ports --name dev dev"
    try{
      def url = 'http://localhost:5001/'
      input message: "Does staging at $url look good? ", ok: "ok! build production image."
    }finally{
      sh "docker rm -f dev"
    }
  }

  stage('production'){
    sh "docker build -t agileworks/sails_sample_prod ." // for saving time
    try{
      sh "docker rm -f sails_sample_prod"
    } catch(e) {}
    sh "docker run -d --name sails_sample_prod -p 8800:5011 --restart always agileworks/sails_sample_prod"
  }

}
