FROM haproxy:3.1

RUN useradd -m appuser
USER appuser

COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

HEALTHCHECK CMD curl --fail http://localhost:80/ || exit 1

EXPOSE 80
