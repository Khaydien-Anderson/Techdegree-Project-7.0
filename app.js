//Bell pop up window
const bell = document.querySelector('.bell');
const list = document.createElement('ul');
const listitem = document.createElement('li');
const listitem2 = document.createElement('li');
const listitem3 = document.createElement('li');


//creates notifications when bell is clicked
function createPopUp () {
    bell.appendChild(list);
    list.appendChild(listitem);
    list.appendChild(listitem2);
    list.appendChild(listitem3);
    list.style.listStyle = 'none'
   
    list.style.position = 'relative'
    list.style.right = '150px'
    list.style.bottom = '-10px'
    list.style.width = '300px'
    list.style.display = 'flex'
    list.style.flexDirection = 'column';
    list.setAttribute("id", "newList");
    list.style.background = 'white';
    list.style.color = 'black';
    list.style.border = 'solid 3px grey'
    
listitem.style.height = '20px'
listitem.style.height = '20px'
listitem.style.borderBottom = 'solid 3px grey'
    listitem.innerHTML = '<li>You have 3 unread Messages<a style="margin-left: 90px;" id="notif1">x</a></li>'
    listitem2.innerHTML = '<li>See who has been viewing your profile<a id="notif2" style="margin-left: 32px;">x</a></li>'
   

    };



/// closes popup window when bell is clicked 
    function closePopUp () {
        if ( event.target == bell.querySelector('.icon')) {
        list.style.display = 'none'
    }}


    //bell listener
    bell.addEventListener('click', () => {
        
        //open/close menu
        if (list.style.display == 'flex') {
            closePopUp()
        } else {
            createPopUp()
        };
    
    const notif1 = list.querySelector('#notif1');
    const notif2 = list.querySelector('#notif2');

    notif1.addEventListener('click', () => {
        listitem.style.display = 'none';
    })

    notif2.addEventListener('click', () => {
        listitem2.style.display = 'none';
    })

    if (listitem.style.display === 'none' && listitem2.style.display === 'none') {
        list.style.border = 'transparent';
        
        let x = document.querySelector('#notif')
        x.style.display = 'none';
        
    }

    
    });
      

//alert banner 
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
`<div class="alert-banner"> 
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = 'none';
    }

});

//LINE CHART BELOW

let trafficCanvas = document.getElementById('traffic-chart');





//line chart data
let trafficDataHourly = {
    labels: ["9:00 - 11:00", "11:00 - 13:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 22:00", "22:00 - 00:00", "00:00 - 03:00",],
    datasets: [{
        label: 'hourly',
        data: [450, 650, 900, 1100, 850, 950, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        target: 'origin',
    }]
};

let trafficDataDaily = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat",],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataWeekly = {
    labels: ["2/10/21", "9/10/21", "16/10/21", "23/10/21", "30/10/21", "06/11/21", "13/11/21",],
    datasets: [{
        data: [1500, 1850, 1200, 2000, 2400, 1750, 1350, 1250, 2250, 1500, 2500], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataMonthly = {
    labels: ["October", "November", "December", "January", "February", "March", "April",],
    datasets: [{
        data: [1450, 1950, 2000, 2400, 2100, 2150, 1950, 1850, 2250, 1900, 2300], 
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
        
        aspectRation: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
};
let hourlyButton = document.querySelector('.traffic-nav > li:nth-child(1)');
let dailyButton = document.querySelector('.traffic-nav > li:nth-child(2)');
let weeklyButton = document.querySelector('.traffic-nav > li:nth-child(3)');
let monthlyButton = document.querySelector('.traffic-nav > li:nth-child(4)');

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions,

});



hourlyButton.addEventListener('click', () => {

    trafficChart.data = trafficDataHourly
trafficChart.update()
});

dailyButton.addEventListener('click', () => {

    trafficChart.data = trafficDataDaily
    trafficChart.update()
});

weeklyButton.addEventListener('click', () => {

    trafficChart.data = trafficDataWeekly
    trafficChart.update()
});

monthlyButton.addEventListener('click', () => {

    trafficChart.data = trafficDataMonthly
    trafficChart.update()
});



// BAR CHART BELOW // 

let dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// DONUT CHART BELOW //

let mobileCanvas = document.getElementById('donut-chart')

const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
           ]
        }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/////////Message fields

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert('Both fields must be filled out.')
    } else if (message.value === '') {
        alert('Message field must be filled out.')
    } else if (user.value === '') {
        alert('User field must be filled out.')
    } else {
        alert('Your message was sent.')
    }

});

const names = ['Dan Oliver', 'Dawn Wood', 'Dale Byrd', 'Victoria Chambers'];


//searches through names^ and filters
user.addEventListener('input', (e) => {
let namesArray = [];

if (e.target.value) {
    namesArray = names.filter(name => name.toLowerCase().includes(e.target.value));
    namesArray = namesArray.map (name => `<li>${name}</li`)
    
    showNamesArray(namesArray); // <<<<< not working 
}

});



function showNamesArray(namesArray) {

    const html = !namesArray.length ? '' : namesArray.join('')
    document.getElementById('#userSearch').innerHTML = html;
};
 


// Settings fields

const save = document.getElementById('save');
const cancel = document.getElementById('cancel');