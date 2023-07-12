$(document).ready(function(){
    $('#small button').click(function(){
        //클릭한 버튼의 타이틀값을 가져온다.
        const x1=$(this).attr('title');
         //이미 활성화되어 있는 버튼이미지 주소를 변경한다.
         const x2=$('.active img').attr('src');//get
         const x3=x2.replace('_active.jpg','.jpg');
        $('.active img').attr('src', x3);//set
        $('#small button').removeClass('active'); //active 라는 클래스이름 삭제
        $(this).addClass('active'); //클릭한 버튼이 클래스 추가
        const x4=$(this).children().attr('src');//src값이 = ('이미지 값') x4 변수생성한 후 대입
        const x5 =  x4.replace('.jpg','_active.jpg');//src값에서 해당 텍스트를 변경시킨후 x5변수를 생성한 후 값을 대입
        $(this).children().attr('src',x5); //클릭한 버튼의 자식요소에서 이미지주소가 변경된다. 

        //큰 이미지가 변경되려면? x6 변수를 생성하면서 값을 대입한다.
        
        const x6 = x4.replace('.jpg','_big.jpg');
        $('#big img').attr('src',x6);

    });
});


