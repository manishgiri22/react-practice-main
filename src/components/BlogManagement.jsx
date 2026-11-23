
import { useState , useEffect} from "react";

function BlogManagement() {
  // Store all blog posts
  const blogfromlocal = JSON.parse(localStorage.getItem("blogdata")) || []
  const [blogs, setBlogs] = useState(["blogfromlocal"]);

  // Store form values
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

const userValue = {
  name : "manish",
  address : "btm"
}  // convert it to string and send 
  

  // set item to the use effect 
  useEffect(()=>{
    // localstorage
  localStorage.setItem("name",JSON.stringify(userValue))  // key and value  ( string marta linxw so )
  localStorage.setItem("name","nabin")
  localStorage.setItem("blogdata",JSON.stringify(blogs)) // as string set hunxw local storage ma 

  } ,[])   
    

  // arko page ma get garna ko lagi next component ma 
  const myName = localStorage.getItem("name")
  const user = JSON.parse(localStorage.getItem("user"))  // converts strings to object 
  
  // remove from local storage 
  // localStorage.remove(name)

  // Store index of blog being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // Add and Update Blog
  const addBlog = () => {
    // Check required fields
    if (
      !title.trim() ||
      !author.trim() ||
      !category ||
      !content.trim() ||
      !date
    ) {
      alert("Please fill all the fields!");
      return;
    }

    if (editingIndex !== null) {
      // Update existing blog
      const updatedBlog = blogs.map((item, index) =>
        index === editingIndex
          ? { id: item.id, title, author, category, content, date }
          : item
      );

      setBlogs(updatedBlog);
      setEditingIndex(null);
    } else {
      // Create new blog
      const newBlog = {
        id: Date.now(),
        title,
        author,
        category,
        content,
        date,
      };

      const updatedBlog = [...blogs, newBlog];
      setBlogs(updatedBlog);
    }

    // Clear form
    setTitle("");
    setAuthor("");
    setCategory("");
    setContent("");
    setDate(new Date().toISOString().slice(0, 10));
  };

  // Delete selected blog
  const deleteBlog = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const updatedBlog = blogs.filter(
        (item, index) => index !== indexToDelete
      );

      setBlogs(updatedBlog);

      if (editingIndex === indexToDelete) {
        resetForm();
      }
    }
  };

  // Delete all blogs
  const deleteAll = () => {
    if (window.confirm("Delete all blogs?")) {
      setBlogs([]);
      resetForm();
    }
  };

  // Edit selected blog
  const editBlog = (itemToEdit, indexToEdit) => {
    setTitle(itemToEdit.title);
    setAuthor(itemToEdit.author);
    setCategory(itemToEdit.category);
    setContent(itemToEdit.content);
    setDate(itemToEdit.date);

    setEditingIndex(indexToEdit);
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setCategory("");
    setContent("");
    setDate(new Date().toISOString().slice(0, 10));
    setEditingIndex(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">

        <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl">

          {/* Heading */}
          <div className="mb-8 pt-4 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">
              My <span className="text-indigo-700">Blog</span> Manager
            </h1>

            <p className="mt-3 text-gray-500">
              Create, manage and organize your blog posts.
            </p>
          </div>

          {/* Blog Form */}
          <div className="mb-8 space-y-4">

            <h2 className="text-2xl font-bold text-gray-800">
              {editingIndex !== null ? "Edit Blog" : "Create New Blog"}
            </h2>

            {/* Title and Author */}
            <div className="grid gap-4 md:grid-cols-2">

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Blog Title"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-indigo-500"
              />

              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Author Name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-indigo-500"
              />

            </div>

            {/* Category and Date */}
            <div className="grid gap-4 md:grid-cols-2">

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-indigo-500"
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Travel">Travel</option>
                <option value="Other">Other</option>
              </select>

              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-indigo-500"
              />

            </div>

            {/* Blog Content */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content..."
              rows="5"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none focus:border-indigo-500"
            />

            {/* Add and Update Buttons */}
            <div className="flex gap-3">

              <button
                onClick={addBlog}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                {editingIndex !== null ? "Update Blog" : "Add Blog"}
              </button>

              {editingIndex !== null && (
                <button
                  onClick={resetForm}
                  className="rounded-xl bg-gray-500 px-6 py-3 font-semibold text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}

            </div>
          </div>

          {/* Blog List Heading */}
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Published Blogs
            </h2>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
              {blogs.length} Blogs
            </span>
          </div>

          {/* Display Blogs */}
          <div className="space-y-4">

            {blogs.length === 0 ? (
              <div className="rounded-xl bg-gray-100 p-8 text-center text-gray-500">
                No blogs available. Create your first blog!
              </div>
            ) : (

              blogs.map((item, index) => (

                <div
                  key={item.id}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition hover:border-indigo-300 hover:shadow-lg"
                >

                  {/* Blog Information */}
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                      {item.category}
                    </span>

                    <span className="text-sm text-gray-500">
                      {item.date}
                    </span>

                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-800">
                    {index + 1}. {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Written by: {item.author}
                  </p>

                  <p className="mt-4 whitespace-pre-wrap break-words text-gray-600">
                    {item.content}
                  </p>

                  {/* Edit and Delete */}
                  <div className="mt-5 flex gap-3">

                    <button
                      onClick={() => editBlog(item, index)}
                      className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteBlog(index)}
                      className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* Delete All */}
          {blogs.length > 0 && (
            <div className="mt-8 text-center">
              <button
                onClick={deleteAll}
                className="w-60 rounded-full bg-red-800 p-3 font-bold text-white transition hover:bg-red-600"
              >
                Delete All Blogs
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 border-t border-gray-100 pt-5 text-center text-sm text-gray-400">
            Share your thoughts. Inspire the world. 💜
          </div>

        </div>
      </div>
    </>
  );
}

export default BlogManagement;
