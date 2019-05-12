import Peer from 'peerjs';

export class Master {
  constructor (id) {
    console.log('crete Master');
    this.id = id;
    this.slaves = [];
    this.peer = new Peer(id);
    this.listen();
    return (async () => {
      await this.open();
      return this;
    })();
  }

  open () {
    return new Promise(resolve => {
      this.peer.on('open', id => resolve(id));
    });
  }

  listen () {
    this.peer.on('connection', async slave => {
      console.log('slave connection request:', slave);
      slave.conn = await this.connect(slave);
      console.log('push conn to slaves array');
      slave.conn.send(`Hello slave ${slave.peer}!`);
      this.slaves.push(slave);
    });
  }

  connect (slave) {
    const {
      peer: id,
      provider: peer
    } = slave;

    return new Promise(resolve => {
      const conn = peer.connect(id);
      console.log('slave connection established:', conn);
      conn.on('open', () => resolve(conn));
    });
  }
}

// =============================================
// =============================================
// =============================================

export class Slave {
  constructor (id) {
    console.log('crete Slave');
    this.masterId = id;
    this.peer = new Peer();
    this.listen();
    return (async () => {
      this.id = await this.open();

      await this.connect();
      return this;
    })();
  }

  open () {
    return new Promise(resolve => {
      this.peer.on('open', id => {
        console.log('open', id);
        resolve(id)
      });
    });
  }

  listen () {
    this.peer.on('connection', master => {
      master.on('data', data => console.log(data));
    });
  }

  connect () {
    return new Promise(resolve => {
      this.conn = this.peer.connect(this.masterId);
      this.conn.on('open', () => resolve());
    });
  }
}
