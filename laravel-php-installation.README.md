```shell
sudo systemctl enable apache2 ^^ sudo systemctl start apache2
systemctl restart apache2
```

varify config \
`sudo apachectl configtest`

check status \
`sudo systemctl status apache2`

`sudo apt update`

install php \
```shell
sudo apt install php libapache2-mod-php php-cli php-common php-mbstring php-xml php-mysql
php -v
```
enable php in apache2 server \
`sudo a2enmod php`

if it error then we need to install fpm file \
`sudo apt install php8.1-fpm`

enable this
```shell
sudo a2enmod proxy_fcgi setenvif
sudo a2enconf php8.1-fpm
```


reload apache server \
`sudo systemctl restart apache2`

write a new php file to apache \
`echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php`

access this server file
`http://localhost/info.php`

remove this newly created file
`sudo rm /var/www/html/info.php`

install php related command line
`sudo apt install php-curl php-gd php-zip php-intl`

find or edit php configuration file
`sudo nano /etc/php/8.2/apache2/php.ini`

restart this server
`sudo systemctl restart apache2`

download xampp from xampp site. then add executable permission
`chmod +x xampp-linux-x64-8.2.7-0-installer.run`

install xampp
`sudo ./xampp-linux-x64-8.2.7-0-installer.run`

start xampp
`sudo /opt/lampp/lampp start`

different command for xampp
```shell
sudo /opt/lampp/lampp stop
sudo /opt/lampp/lampp restart
sudo /opt/lampp/lampp startapache
sudo /opt/lampp/lampp stopapache
sudo /opt/lampp/lampp startmysql
sudo /opt/lampp/lampp stopmysql
```

launch control panel
`sudo /opt/lampp/manager-linux-x64.run`


configure xampp
```shell
/opt/lampp/etc/httpd.conf
/opt/lampp/etc/php.ini
/opt/lampp/etc/my.cnf
```

if another service running in port 80 then change port
```shell
/opt/lampp/etc/httpd.conf
Listen 8080
```

change permission
```shell
sudo chmod -R 755 /opt/lampp/htdocs
sudo chown -R $USER:$USER /opt/lampp/htdocs
```

uninstall xampp
```shell
sudo /opt/lampp/uninstall
sudo rm -rf /opt/lampp
```

install composer
`sudo apt install composer`


switch within different php version
`sudo add-apt-repository ppa:ondrej/php`

install different php version
```shell
sudo apt install php8.0 php8.0-fpm php8.0-cli php8.0-common php8.0-mbstring php8.0-xml php8.0-mysql
sudo apt install php8.1 php8.1-fpm php8.1-cli php8.1-common php8.1-mbstring php8.1-xml php8.1-mysql
```

update-alternatives to different php version
```shell
sudo update-alternatives --install /usr/bin/php php /usr/bin/php8.0 80
sudo update-alternatives --install /usr/bin/php php /usr/bin/php8.1 81
```

switch
`sudo update-alternatives --config php`

install php extensions
`sudo apt-get install php8.1-curl php8.1-mbstring php8.1-xml php8.1-zip php8.1-intl php8.1-bcmath`


switch php in apache
```shell
sudo a2dismod php8.0 php8.1
sudo a2enmod php8.0
sudo systemctl restart apache2
```

switch php-fpm
```shell
sudo a2enmod proxy_fcgi setenvif
sudo a2enconf php8.0-fpm php8.1-fpm
sudo systemctl restart apache2
```


add laravel installer
`composer global require laravel/installer`

find laravel installed packages
`composer global config bin-dir --absolute`

outpur will find this path, then export this path in ~/bashrc file and source it
```shell
nano ~/.bashrc
source ~/.bashrc
```

create new laravel project
`laravel new project-name`

Create new laravel project with composer
`composer create-project --prefer-dist laravel/laravel my_project "9.*"`

run laravel project
`php artisan serve`

this will run in loopback address
`http://127.0.0.1:8000`














