FROM debian:stretch

USER root

RUN echo Europe/Oslo >/etc/timezone && \
ln -sf /usr/share/zoneinfo/Europe/Oslo /etc/localtime && \
dpkg-reconfigure -f noninteractive tzdata

WORKDIR /root
ENV CHROME_VERSION="google-chrome-stable"

# system packages
RUN apt update -qqy && \
  apt install -qqy build-essential gnupg wget curl jq

# nodejs 12
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  apt install -qqy nodejs && \
  npm install -g lighthouse

# google-chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
  apt update -qqy && \
  apt install -qqy ${CHROME_VERSION:-google-chrome-stable}

# python3 (optional for metric processing)
RUN apt install -qqy python3 python3-pip && \
  pip3 install influxdb

# lighthouse
RUN useradd -ms /bin/bash lighthouse
USER lighthouse
WORKDIR /home/lighthouse/reports

CMD CHROME_PATH=$(which google-chrome) lighthouse $url --emulated-form-factor=none --output=json --chrome-flags="--headless --no-sandbox" --output-path=report.${site_name}.`date +"%d.%m.%Y.%H.%M"`.json