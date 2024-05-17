import "./blog.css"
import Article from "../../components/article/Article"
import blog1 from "../../assets/blog01.png"
import blog2 from "../../assets/blog02.png"
import blog3 from "../../assets/blog03.png"
import blog4 from "../../assets/blog04.png"
import blog5 from "../../assets/blog05.png"

function Blog() {
    return (
        <div className=" blog section__padding " id="blog">
            <div className=" blog_content">
                <h1>A lot is happening,
                    We are blogging about it.</h1>
            </div>

            <div className=" blog_container">
                <div className=" blog_container_groupA ">
                    <Article img={blog1} date="Sep 23, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />

                </div>


                <div className=" blog_container_groupB ">
                    <Article img={blog2} date="Sep 23, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog3} date="Sep 14, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog4} date="Sep 10, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog5} date="Sep 21, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>

    )
}

export default Blog