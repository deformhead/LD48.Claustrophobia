const four = {

    'moves': 5,
    'hero': [1, 1],
    'grid': [

        [1, 1, 1, 1, 1],
        [1, 0, 0, 7, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 7, 0, 0, 1],
        [1, 1, 1, 1, 1],
    ],
    'enemies': [

        [
            {'x': 2, 'y': 2, 'direction': 'UP'},
            {'x': 2, 'y': 1, 'direction': 'DOWN'},
        ],
        [
            {'x': 1, 'y': 5, 'direction': 'UP'},
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'UP'},
            {'x': 3, 'y': 3, 'direction': 'UP'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
        ],
        [
            {'x': 3, 'y': 2, 'direction': 'DOWN'},
            {'x': 3, 'y': 3, 'direction': 'DOWN'},
            {'x': 3, 'y': 4, 'direction': 'DOWN'},
            {'x': 3, 'y': 5, 'direction': 'LEFT'},
            {'x': 2, 'y': 5, 'direction': 'RIGHT'},
            {'x': 3, 'y': 5, 'direction': 'UP'},
        ],
    ]
};

export {four};
