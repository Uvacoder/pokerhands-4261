import Peer from 'peerjs';

class Player {
  constructor (conn) {
    this.conn = { from: conn };
    this.listen();
  }

  listen () {
    this.conn.from.on('data', data => {
      console.log(`${this.conn.from.peer} said: ${data}`);
    });
  }

  connect () {
    return new Promise(resolve => {
      this.conn.to = this.conn.from.provider.connect(this.conn.from.peer);
      this.conn.to.on('open', () => resolve());
    });
  }

  async send (data) {
    if (!this.conn.to) await this.connect();
    this.conn.to.send(data);
  }
}

class Room {
  constructor (id) {
    this.id = id;
    this.peer = new Peer();
    this.listen();
    return (async () => {
      await this.connect();
      return this;
    })();
  }

  listen () {
    this.peer.on('connection', conn => {
      conn.on('data', data => console.log(data));
    });
  }

  connect () {
    return new Promise(resolve => {
      this.conn = this.peer.connect(this.id);
      this.conn.on('open', () => resolve());
    });
  }

  send (data) {
    this.conn.send(data);
  }
}

class Room2 {
  constructor () {
    this.players = [];
    this.peer = new Peer();
    this.listen();
    return (async () => {
      this.id = await this.open();
      return this;
    })();
  }

  open () {
    return new Promise(resolve => {
      this.peer.on('open', id => resolve(id));
    });
  }

  listen () {
    this.peer.on('connection', conn => {
      const player = new Player(conn);

      player.send('Hello player!');
      this.players.push(player);
    });
  }
}

class PeerService {

  async create () {
    const room = await new Room2();
    console.log('room2:', room.id);
  }

  async connect (id) {
    this.room = await new Room(id);
    this.room.send('Hello room!');
  }

}

export default PeerService;
