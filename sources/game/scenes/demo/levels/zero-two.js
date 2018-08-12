const zeroTwo = {

    'moves': 6,
    'hero': [3, 1],
    'grid': [

        [8, 8, 1, 1, 1, 8, 8],
        [8, 8, 1, 0, 1, 8, 8],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [8, 8, 1, 7, 1, 8, 8],
        [8, 8, 1, 1, 1, 8, 8],
    ],
    'enemies': [

        [
            {'x': 1, 'y': 3, 'direction': 'RIGHT'},
            {'x': 2, 'y': 3, 'direction': 'RIGHT'},
            {'x': 3, 'y': 3, 'direction': 'RIGHT'},
            {'x': 4, 'y': 3, 'direction': 'RIGHT'},
            {'x': 5, 'y': 3, 'direction': 'LEFT'},
            {'x': 4, 'y': 3, 'direction': 'LEFT'},
            {'x': 3, 'y': 3, 'direction': 'LEFT'},
            {'x': 2, 'y': 3, 'direction': 'LEFT'},
        ]
    ]
};

export {zeroTwo};
