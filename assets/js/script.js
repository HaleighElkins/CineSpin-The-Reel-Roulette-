

// TMDb API This is what they gave me for the request. H.E
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.themoviedb.org/3/authentication")
  .get()
  .addHeader("accept", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0Njc0ZTgyZTM0ZmI2OWZmY2M1OWU5YWE4MTE1MiIsInN1YiI6IjY1YmIwZjgxMWZkMzZmMDE3ZDcyNTBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMg42C8e5ddc38-ZLr6hNsMSxXlHspaELs7ubZBQImo")
  .build();

Response response = client.newCall(request).execute();