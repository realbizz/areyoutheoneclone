var men = ['Alec','Austin','Chuck','Connor','Devin','Hunter','Mike','Nelson','Tyler','Zak'];
var women = ['Amanda','Britni','Chelsey','Cheyenne','Hannah','Kayla','Kiki','Melanie','Rashida','Stacey'];

var truthBooths =
    [
	{ 'Hunter': {'Kiki': false } },
	{ 'Devin': {'Kiki': false } },
	{ 'Zak':   {'Kiki': false } },
	{ 'Chuck': {'Britni': false } },
	{ 'Connor': {'Chelsey': true } },
    ];

var matchUps = [
    [2, {
	'Hannah': 'Chuck',
	'Rashida': 'Tyler',
	'Amanda': 'Mike',
	'Melanie': 'Devin',
	'Chelsey': 'Connor',
	'Kiki': 'Austin',
	'Stacey': 'Alec',
	'Britni': 'Hunter',
	'Cheyenne': 'Nelson',
	'Kayla': 'Zak'
    }],
    [0, {
	'Hunter': 'Stacey',
	'Austin': 'Kiki',
	'Connor': 'Kayla',
	'Nelson': 'Cheyenne',
	'Mike': 'Amanda',
	'Zak': 'Britni',
	'Devin': 'Melanie',
	'Tyler': 'Rashida',
	'Alec': 'Chelsey',
	'Chuck': 'Hannah'
    }],
    [3, {
	'Chelsey': 'Connor',
	'Kiki': 'Chuck',
	'Amanda': 'Austin',
	'Rashida': 'Devin',
	'Cheyenne': 'Tyler',
	'Melanie': 'Nelson',
	'Hannah': 'Zak',
	'Kayla': 'Mike',
	'Stacey': 'Alec',
	'Britni': 'Hunter'
    }],
    [2,{
	'Alec': 'Amanda',
	'Tyler': 'Melanie',
	'Zak': 'Cheyenne',
	'Chuck': 'Kiki',
	'Devin': 'Hannah',
	'Mike': 'Kayla',
	'Connor': 'Chelsey',
	'Nelson': 'Britni',
	'Hunter': 'Rashida',
	'Austin': 'Stacey'
    }],
    [1+1,{
	'Melanie': 'Hunter',
	'Britni': 'Mike',
	'Stacey': 'Alec',
	'Kayla': 'Zak',
	'Rashida': 'Nelson',
	'Cheyenne': 'Devin',
	'Hannah': 'Austin',
	'Kiki': 'Chuck',
	'Amanda': 'Tyler',
	'Chelsey': 'Connor' // From earlier Truth Booth
    }]
];

