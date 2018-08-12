const one = {

    'moves': 8,
    'hero': [3, 3],
    'grid': [

        [8, 1, 1, 1, 1, 1, 8],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [8, 8, 1, 0, 1, 8, 8],
        [8, 8, 1, 7, 1, 8, 8],
        [8, 8, 1, 1, 1, 8, 8],
    ],
    'enemies': [

        [
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
        ],
        [
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
        ]
    ]
};

export {one};
