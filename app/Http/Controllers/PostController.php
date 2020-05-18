<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        $post = new Post();

        $path = $request->file('archive')->store('images', 'public');
        
        $post->name = $request->name;
        $post->email = $request->email;
        $post->title = $request->title;
        $post->subtitle = $request->subtitle;
        $post->message = $request->message;
        $post->archive = $path;
        $post->likes = 0;
        
        $post->save();
        return response($post, 200);
    }


    public function destroy($id)
    {
        $post = Post::find($id);
        if(isset($post)){
            Storage::disk('public')->delete($post->archive);
            $post->delete();
            return  204;
        }
        return response('Post não encontrado', 404);
    }
    public function like($id)
    {
        $post = Post::find($id);
        if(isset($post)){
            $post->likes++;
            $post->save();
            return $post;
        }
        return response('Post não encontado', 404);
    }
}
