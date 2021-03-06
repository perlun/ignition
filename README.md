# ignition

This is a little experiment I made playing around with Spark (http://sparkjava.com).

The theory is: _would it be possible to develop a Java-based application server that is fun and easy to maintain, and also fun and easy to use_? For now, I think the answer is a clear and resoundable "yes!". Here are my conclusions thus far:

- Java is very different from what it used to be (not really as bad as I wrote about in [this blog post](http://perlun.eu.org/en/2017/04/03/my-three-favourite-programming-languages); I think I'll need to revisit that in a while since it's a bit too negative to Java given how the language is actually evolving nowadays). Things are changing to the better with Java 8 and 9:
  - Lambdas/closures. Very nice; we've had it for years in other languages but it's good that we're also seeing it in Java now.
  - Nashorn (the embedded Javascript interpreter that was introduced in Java 8) is getting some love, to better support ECMAScript 6 (including the beloved "fat arrow"). This makes it, to me, a quite viable alternative for adding scripting support to your Java-based application.
  - Visual Studio Code has [great Java support](https://github.com/redhat-developer/vscode-java), thanks to our friends at Red Hat. As many of us know, VSCode is a great editor for programmers; a lot nicer and easier to get started with than Netbeans, Eclipse etc. With a good editor, the pain of using a language like Java definitely decreases.
  - Whether we like it or not, Java is still the world's most popular programming language (at least according to the [TIOBE Index](https://www.tiobe.com/tiobe-index/); the GitHub [Octoverse](https://octoverse.github.com/) page paints a somewhat different picture, where Javascript is king, but that's _only_ talking about the pull requests that actually reach GitHub... A lot of corporate code is written out there that is not included in the Octoverse statistics).

[Groovy](http://groovy-lang.org/) also exists and is an option to me, but the VSCode support for it seems much more limited. Hence, I am feeling right now that Java + some JavaScript for dynamism would be a worthwhile approach to try out.

Building a Java-based application server with Spark and letting the REST API be defined in JavaScript makes sense. If you need to do more complex things in your REST API, you can always define some custom Java classes to take care of the logic (which can easily be called from the JavaScript dynamic part, and even call back into the JavaScript code if needed). Seems like the best compromise, to get the best out of both worlds: _static_ Java code for the more complex parts (the application server and the more complex parts of the applications) and _dynamic_ JavaScript for trivial application code (fetching some data from a database and returning it as JSON etc...).

You can even write the dynamic part in TypeScript instead of Java, to get a totally awesome editing experience (as long as you prepare `.d.ts` files for the non-TypeScript parts); this, to me, seems like the optimal approach.
