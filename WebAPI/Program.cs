using BL_AppServices;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddAppServices();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddScoped<IBookRepository,BookRepository>()

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
app.UseSwagger();
app.UseCors(options =>
{
    options.WithOrigins("http://localhost:5014").AllowAnyHeader().AllowAnyMethod();
});
app.MapControllers();
app.UseSwaggerUI();

app.Run();

