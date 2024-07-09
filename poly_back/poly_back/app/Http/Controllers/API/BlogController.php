<?php
namespace App\Http\Controllers\API;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderBy('created_at', 'desc')->get();
        return BlogResource::collection($blogs);
        /* return BlogResource::collection(Blog::all()); */
        /* return response()->json($data); */
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|string', // Assuming the image is a URL
            'content' => 'required|string',
        ]);

         Blog::create($validatedData);
        return response()->json("Blog Created");
    }

    public function show($id)
    {
        Log::info($id);
        return response()->json(["blog"=>Blog::findOrFail($id)]);


    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'image' => 'nullable|string', // Assuming the image is a URL
            'content' => 'sometimes|required|string',
        ]);

        $blog = Blog::findOrFail($id);
        $blog->update($validatedData);

        return $blog;
    }

    public function destroy($id)
    {
        Blog::destroy($id);

        return response()->noContent();
    }
}

