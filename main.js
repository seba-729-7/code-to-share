const copySenate = Array.from(senate.results[0].members);
let tableArray = [];
let tableArrayState = [];
let $table = document.getElementById('table-tbody');
const $btncheck1 = document.getElementById('btncheck1');
const $btncheck2 = document.getElementById('btncheck2');
const $btncheck3 = document.getElementById('btncheck3');
const $stateSelect = document.getElementById('stateSelect');
let states=[0,0,0];

function toggle(a){
    switch (a) {
        case 0:
            a = 1;
            break;
        case 1:
            a = 0;
            break;
    }
    return a;
}

function showData(array){
    $table.innerHTML = "";
    array.forEach(element => {
        $table.innerHTML += `
            <tr>
                <td> ${element.first_name} ${element.last_name}</td>
                <td class="text-center">${element.party}</td>
                <td class="text-center">${element.state}</td>
                <td class="text-center">${element.seniority}</td>
                <td class="text-center">${element.votes_with_party_pct}</td>
            </tr>
            `;
    });
}


$btncheck1.addEventListener('click',e => {
    if (states[0] == 0){
        copySenate.forEach(element => {
            if (element.party == 'D'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'D');
    }
    states[0] = toggle(states[0]);
    showData(tableArray);
})

$btncheck2.addEventListener('click',e => {
    if (states[1] == 0){
        copySenate.forEach(element => {
            if (element.party == 'R'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'R');
    }
    states[1] = toggle(states[1]);
    showData(tableArray);
})

$btncheck3.addEventListener('click',e => {
    if (states[2] == 0){
        copySenate.forEach(element => {
            if (element.party == 'ID'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'ID');
    }
    states[2] = toggle(states[2]);
    showData(tableArray);
})

$stateSelect.addEventListener('change',e => {
    let value = $stateSelect.value;
    if (value) {
        tableArrayState = tableArray.filter(element => element.state == value);
        if (tableArrayState.length == 0){
            tableArrayState.push({'first_name':'No data meets the filters applied',
                                'last_name':'',
                                'party':'',
                                'state':'',
                                'seniority':'',
                                'votes_with_party_pct':''});
        }
        showData(tableArrayState);
    }else{
        showData(tableArray);
    }
})