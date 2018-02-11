# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV['VAGRANT_DEFAULT_PROVIDER'] = 'docker'
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Disable synced folders for the Docker container
  # (prevents an NFS error on "vagrant up")
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.define "web" do |web|
    web.vm.provider "docker" do |d|
      d.name = "web"
      d.build_dir = "./web-app"
      d.build_args = ["-t", "web-app"]
      d.ports = ["8080:8080"]
      d.remains_running = true
  end
end
  
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.define "lb" do |lb|
    lb.vm.provider "docker" do |d|
      d.name = "lb"
      d.build_dir = "./haproxy"
      d.build_args = ["-t", "lb-haproxy"]
      d.ports = ["80:80"]
      d.remains_running = true
      d.link ("web:web")
    end
  end
end
