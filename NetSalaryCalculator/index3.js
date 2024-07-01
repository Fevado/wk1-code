function netSalaryCalculator (basicSalary,benefits){
 let grossSalary= basicSalary+benefits

 function nhifDeduction (grossSalary){
    if (grossSalary<= 5,999){
        return 150
    }else if (grossSalary<=7,999){
        return 300
    }else if  (grossSalary<=11,999){
        return 400
    }else if (grossSalary<=14,999){
        return 500
    }else if (grossSalary<=19,999){
        return 600
    }else if (grossSalary<=24,999){
        return 750
    }else if (grossSalary<=29,999){
        return 850
    }else if (grossSalary<=34,999){
        return 900
    }else if (grossSalary<=39,999){
        return 950
    }else if (grossSalary<=44,999){
        return 1000
    }else if (grossSalary<=49,999){
        return 1,100
    }else if (grossSalary<=59,999){
        return 1,200
    }else if (grossSalary<=69,999){
        return 1,300
    }else if (grossSalary<=79,999){
        return 1,400
    }else if (grossSalary<=89,999){
        return 1,500
    }else if (grossSalary<=99,999){
        return 1,600
    }else {
        return 1,700
    }

    function payeDeduction(grossSalary){
        let personalRelief=2400;
    if (grossSalary<=24,0o0){
        return ((grossSalary*0.1)-personalRelief)
    }else if (grossSalary<=32,333){
        return ((grossSalary*0.25)-personalRelief)
    }else if (grossSalary<=500,0o0){
        return ((grossSalary*0.3)-personalRelief)
    }else if (grossSalary<=800,0o0){
        return ((grossSalary*0.325)-personalRelief)
    }else {
        return ((grossSalary*0.35)-personalRelief)
    }
    }
    
    function nssfDeductions(grossSalary){
        return (grossSalary*0.06)
    }

    function netSalary(grossSalary,nhifDeduction,payeDeduction,nssfDeductions){
        return grossSalary-(nhifDeduction+payeDeduction+nssfDeductions)
    }
 }
}

netSalaryCalculator(50000,20000)