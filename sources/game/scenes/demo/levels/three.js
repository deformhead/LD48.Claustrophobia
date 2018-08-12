const three = {

    'moves': 8,
    'hero': [5, 1],
    'grid': [

        [8, 1, 1, 1, 1, 1, 8],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 7, 0, 0, 0, 0, 1],
        [8, 1, 1, 1, 1, 1, 8],
    ],
    'enemies': [

        [
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'UP'},
            {'x': 4, 'y': 1, 'direction': 'LEFT'},
            {'x': 3, 'y': 1, 'direction': 'LEFT'},
            {'x': 2, 'y': 1, 'direction': 'LEFT'},
            {'x': 1, 'y': 1, 'direction': 'DOWN'},
            {'x': 1, 'y': 2, 'direction': 'DOWN'},
            {'x': 1, 'y': 3, 'direction': 'DOWN'},
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
        ],
        [
            {'x': 2, 'y': 3, 'direction': 'UP'},
            {'x': 2, 'y': 2, 'direction': 'RIGHT'},
            {'x': 3, 'y': 2, 'direction': 'RIGHT'},
            {'x': 4, 'y': 2, 'direction': 'RIGHT'},
            {'x': 5, 'y': 2, 'direction': 'DOWN'},
            {'x': 5, 'y': 3, 'direction': 'DOWN'},
            {'x': 5, 'y': 4, 'direction': 'DOWN'},
            {'x': 5, 'y': 5, 'direction': 'LEFT'},
            {'x': 4, 'y': 5, 'direction': 'LEFT'},
            {'x': 3, 'y': 5, 'direction': 'LEFT'},
            {'x': 2, 'y': 5, 'direction': 'UP'},
            {'x': 2, 'y': 4, 'direction': 'UP'},
        ],
        [
            {'x': 5, 'y': 5, 'direction': 'UP'},
            {'x': 5, 'y': 4, 'direction': 'LEFT'},
            {'x': 4, 'y': 4, 'direction': 'DOWN'},
            {'x': 4, 'y': 5, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 1, 'direction': 'LEFT'},
            {'x': 1, 'y': 1, 'direction': 'DOWN'},
            {'x': 1, 'y': 2, 'direction': 'DOWN'},
            {'x': 1, 'y': 3, 'direction': 'RIGHT'},
            {'x': 2, 'y': 3, 'direction': 'UP'},
            {'x': 2, 'y': 2, 'direction': 'UP'},
        ],
        [
            {'x': 2, 'y': 4, 'direction': 'DOWN'},
            {'x': 2, 'y': 5, 'direction': 'UP'},
            {'x': 2, 'y': 4, 'direction': 'LEFT'},
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
        ],
    ]
};

export {three};
