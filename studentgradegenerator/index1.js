function studentGrade(marks){
if (marks>100){
    console.log('Marks cannot be greater than 100')
}else if (marks>79 ){
    console.log('A')
} else if (marks>=60){
    console.log('B')
} else if (marks>49){
    console.log('C')
}else if (marks>=40){
    console.log('D')
}else if (marks>0){
    console.log('E')
} else {
    console.log('Marks cannot be less than zero')
}
}

studentGrade(100)
studentGrade(130)
studentGrade(-5)
studentGrade(39)