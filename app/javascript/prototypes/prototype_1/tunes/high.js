const synth = {
  volume: -10,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sine',
    modulationType: 'sine',
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

const sequence = {
  steps: [
    {
      time: '0:0:4',
      noteName: 'A6',
      duration: '2n',
      velocity: .1
    },
    {
      time: '0:3:6',
      noteName: 'F6',
      duration: '1n',
      velocity: .1
    },
    {
      time: '0:3:0',
      noteName: 'A6',
      duration: '1n',
      velocity: .1
    },
    {
      time: '1:3:0',
      noteName: 'E6',
      duration: '1n',
      velocity: .1
    },
    {
      time: '2:3:0',
      noteName: 'B6',
      duration: '3n',
      velocity: .1
    },
    {
      time: '2:0:3',
      noteName: 'A6',
      duration: '1n',
      velocity: .1
    },
    {
      time: '3:3:0',
      noteName: 'G6',
      duration: '2n',
      velocity: .1
    },
    {
      time: '1:3:6',
      noteName: 'A6',
      duration: '1n',
      velocity: .1
    },
    {
      time: '1:1:3',
      noteName: 'D6',
      duration: '4n',
      velocity: .1
    },
    {
      time: '0:2:0',
      noteName: 'C6',
      duration: '4n',
      velocity: .1
    },
    {
      time: '1:3:0',
      noteName: 'G6',
      duration: '4n',
      velocity: .1
    },
    {
      time: '0:3:2',
      noteName: 'C6',
      duration: '4n',
      velocity: .1
    }
  ],
  duration: '2m'
}

export { synth, chorus, pingPongDelay, sequence }
