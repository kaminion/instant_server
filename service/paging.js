class Paging
{
    static calPage(count, nowPage = 1){

        const totalPage = calTotalPage(count); 
        const {firstPage, nowPage} = this.calBlock(nowPage);

        return {totalPage, firstPage, nowPage};
    }
    
    // 전체 게시글 수를 페이지로 변환
    static calTotalPage(count)
    {
        let page = 0;

        page = count / 15;
        if(page % 15 !== 0) page ++;

        return page;
    }

    // 전체 페이지를 블록으로 변환
    static calBlock(nowPage)
    {
        const firstPage = nowPage - nowPage % 10;

        return {firstPage, nowPage};
    }

}