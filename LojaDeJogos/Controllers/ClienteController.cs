using LojaDeJogos.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LojaDeJogos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        private ApplicationDbContext _dbContext;

        public ClienteController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));

        }

        /// <summary>
        /// Cadastra um novo cliente.
        /// </summary>
        /// <param name="cliente">Os dados do cliente a serem cadastrados.</param>
        /// <returns>O cliente cadastrado.</returns>
        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult> Cadastrar(Cliente cliente)
        {
            if (_dbContext is null)
                return NotFound();

            await _dbContext.AddAsync(cliente);
            await _dbContext.SaveChangesAsync();
            return Created("", cliente);
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Cliente>> > Listar()
        {
            if (_dbContext is null)
                return NotFound();

            return await _dbContext.Cliente.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{Id}")]
        public async Task<ActionResult<Cliente>> Buscar(int idCliente)
        {
            if (_dbContext is null)
                return NotFound();

            var ClienteTemp = await _dbContext.Cliente.FindAsync(idCliente);
            if (ClienteTemp is null)
                return NotFound();

            return ClienteTemp;
        }

        [HttpPut()]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Cliente Cliente)
        {
            if (_dbContext is null)
                return NotFound();

            var ClienteTemp = await _dbContext.Cliente.FindAsync(Cliente.IdCliente);
            if (ClienteTemp is null)
                return NotFound();

            _dbContext.Cliente.Update(Cliente);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete()]
        [Route("excluir/{id}")]
        public async Task<ActionResult> Excluir(int idCliente)
        {
            if (_dbContext is null)
                return NotFound();

            var ClienteTemp = await _dbContext.Cliente.FindAsync(idCliente);
            if (ClienteTemp is null)
                return NotFound();

            _dbContext.Remove(ClienteTemp);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}