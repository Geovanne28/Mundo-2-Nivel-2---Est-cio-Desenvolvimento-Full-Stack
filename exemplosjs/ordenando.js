getRandomInt = (max) => Math.floor(Math.random() * max);

swap = (vetor, pos1, pos2) => {
    var aux = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = aux;
    // console.log(vetor);
    return vetor;
}

shuffle = (vetor, qtdTrocas) => {
    var tamanhoVetor = vetor.length;
    for (var i = 0; i < qtdTrocas; i++) {
        vetor = swap(vetor, getRandomInt( tamanhoVetor), getRandomInt( tamanhoVetor));
    }
    return vetor;
}

bubble_sort = (vetor) =>{
    var tamanhoVetor = vetor.length;
    for (var i = 0; i < tamanhoVetor; i++) {
        for (var j = 0; j < tamanhoVetor; j++) {
            if (vetor[i] < vetor[j]) {
                vetor = swap(vetor, i, j);
            }
        }
    }
    return vetor;
}
selection_sort = (vetor) => {
    var tamanhoVetor = vetor.length;
    var menor;
    for (var i = 0; i < tamanhoVetor - 1; i++) {
        menor = i;
        for (var j = i + 1; j < tamanhoVetor; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            vetor = swap(vetor, i, menor);
        }
    }
    return vetor;
}

quick_sort = (vetor, posicao_inicial, posicao_final) => {
    if (vetor.length > 1) {
        index = partition(vetor, posicao_inicial, posicao_final);

        if (posicao_inicial < index - 1) { 
            quickSort(vetor, posicao_inicial, index - 1);
        }
        if (index < posicao_final) {
            quickSort(vetor, index, posicao_final);
        }
    }
    return vetor;
}


quick_sort = (vetor, posicao_inicial, posicao_final) => {
    var posicao_pivo, posicao_divisao, i, j, aux;
    posicao_pivo = posicao_inicial;
    posicao_divisao = posicao_final;
    i = posicao_inicial;
    j = posicao_final;
    
    while (i < j) {
        while (vetor[i] <= vetor[posicao_pivo] && i < posicao_final) {
            i++;
        }
        while (vetor[j] > vetor[posicao_pivo]) {
            j--;
        }
        if (i < j) {
            vetor = swap(vetor, i, j);
        }
    }
    
    vetor = swap(vetor, posicao_pivo, j);

    posicao_pivo = j;
    if (posicao_pivo - 1 > posicao_inicial) {
        vetor = quick_sort(vetor, posicao_inicial, posicao_pivo - 1);
    }
    if (posicao_pivo + 1 < posicao_final) {
        vetor = quick_sort(vetor, posicao_pivo + 1, posicao_final);
    }
    return vetor;
}

partition = (vetor, posicao_inicial, posicao_final, pivot) => {
    var i = posicao_inicial;
    var j = posicao_final;
    while (i <= j) {
        while (vetor[i] < pivot) {
            i++;
        }
        while (vetor[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }
    return i;
}
