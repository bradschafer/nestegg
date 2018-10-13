## Using docker-compose
This section details how to start the whole cluster using docker-compose and a YAML definition file

Create a network shared by all containers
docker network create rabbitmq-cluster
Start cluster:
docker-compose up -d
View logs for all containers
docker-compose logs -f
Run producer / consumer for testing

## RabbitMQ Overview in 5 minutes
https://www.youtube.com/watch?v=deG25y_r6OY


## Best Practices
https://www.youtube.com/watch?v=HzPOQsMWrGQ&feature=youtu.be
- 1 connection for publising
- 1 connection for consuming 
- Reuse connections for app
- Don't open and close connections or channels repeatedly
- Queues are fast if they are short
- Use lazy queue mode if they are long (500k ish)
- Limit queue size with TTL or max-length
- Consume (push) dont poll (pull) for messages.
- Auto-ack or ack every X messages instead of every msg (if use case allows)
- Keep queues <10k for management interface needs
- use auto-delete on queues if temp and not needed
- For a message to survive a server restart
    - Durable Exchange
    - Durable Queue
    - Persistant message ( delivery_mode=2)
- For throughput use temp or non-durable queues
- If acknowlements are required wait for ack and/or retry publish
- prefetch value should be limited (latency / processs time + 1). Not set very bad practice, RAM overload.
- ensure to acknowledge failing messages to ensure prefetch isn't maxing out
- for clusters try to keep ~3 max, ensure durable queues are mirrored
- ensure the client is able to fail-over using a connection array or DNS load balancer with short TTL
- scale vertically ( hardware) is better than more nodes for scaling and 3 nodes is appropriate for high availability 
- lower the HA bactch-sync-size if clusters need to sync often over slow networks
- use the xfs filesystem if possible. 
- GP2/IO1 drives on EC2 due to IOPS being more important  

## tips for resilience
export ERL_CRASH_DUMP_SECONDS=1

make RAM usage mor stable
export RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS="+hmqd off_heap"